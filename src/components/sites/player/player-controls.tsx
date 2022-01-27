import React from 'react';
import type { FC } from 'react';
import type { Replayer } from 'rrweb';
import { Icon } from 'components/icon';
import { Button } from 'components/button';
import { PlayerSpeed } from 'components/sites/player/player-speed';
import { PlayerSlider } from 'components/sites/player/player-slider';
import { PlayerSliderLoading } from 'components/sites/player/player-slider-loading';
import { Spinner } from 'components/spinner';
import { PlayerState, Action, PlayerStatus } from 'types/player';
import type { Recording } from 'types/graphql';

interface Props {
  state: PlayerState;
  replayer: Replayer;
  recording: Recording;
  dispatch: React.Dispatch<Action>;
}

export const PlayerControls: FC<Props> = ({ state, replayer, recording, dispatch }) => {
  const handlePlayPause = () => {
    switch(state.status) {
      case PlayerStatus.FINISHED:
        replayer.play(0);
        break;
      case PlayerStatus.PLAYING:
        replayer.pause();
        break;
      default:
        replayer.play(replayer.getCurrentTime());
    }   
  };

  const handlePlaybackSpeed = (speed: number) => {
    replayer.setConfig({ speed });
  };

  const handleSkipInactivity = (skip: boolean) => {
    replayer.setConfig({ skipInactive: skip });
    // TODO: It would be nice if the replayer reacted and 
    // dispatched but it doesn't seem to trigger anything
    dispatch({ type: 'skipInactivity', value: skip });
  };

  const handleSetProgress = (ms: number) => {
    replayer.play(ms);
  };

  const PlayPauseIcon = () => {
    switch(state.status) {
      case PlayerStatus.PLAYING:
        return <Icon name='pause-fill' />;
      case PlayerStatus.PAUSED:
        return <Icon name='play-fill' />;
      case PlayerStatus.LOADING:
        return <Spinner hideShowExtra />;
      case PlayerStatus.FINISHED:
        return <Icon name='play-line' />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button className='control play-pause' onClick={handlePlayPause} disabled={!recording}>
        <PlayPauseIcon />
      </Button>

      {replayer && recording && (
        <PlayerSlider 
          key={recording.id}
          replayer={replayer}
          status={state.status}
          playbackSpeed={state.playbackSpeed}
          recording={recording} 
          handleSlide={handleSetProgress} 
        />
      )}

      {(!replayer || !recording) && (
        <PlayerSliderLoading />
      )}

      <PlayerSpeed
        recording={recording}
        playbackSpeed={state.playbackSpeed} 
        skipInactivity={state.skipInactivity}
        handlePlaybackSpeed={handlePlaybackSpeed} 
        handleSkipInactivity={handleSkipInactivity}
      />
    </>
  );
};
