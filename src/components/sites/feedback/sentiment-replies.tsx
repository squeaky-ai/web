import React from 'react';
import type { FC } from 'react';
import { groupBy, first, orderBy } from 'lodash';
import { Emoji } from 'components/emoji';
import { percentage } from 'lib/maths';
import type { FeedbackSentimentReplies } from 'types/graphql';

interface Props {
  replies: FeedbackSentimentReplies;
}

export const SentimentReplies: FC<Props> = ({ replies }) => {
  const groups = groupBy(replies.responses.map(r => r.score));

  const getCount = (num: number) => (groups[num] || []).length;

  const getPercentage = (num: number) => percentage(replies.total, getCount(num));

  const biggest = first(orderBy(Object.entries(groups), ([, value]) => value.length, 'desc')[0])

  const offset = 100 - getPercentage(Number(biggest) || 0);

  const offsettedPercentage = (count: number) => {
    const percent = getPercentage(count);
    const value = offset + percent;

    return percent === 0 ? 1 : value;
  };

  return (
    <div className='sentiment-replies'>
      <ul>
        <li>
          <div className='type'>
            <div className='emoji'>
              <Emoji emoji='emoji-5' height={24} width={24} />
            </div>
          </div>
          <div className='score'>
            <div className='percentage' style={{ width: `${offsettedPercentage(4)}%` }} />
            <p><b>{getCount(4)}</b> <span>({getPercentage(4)}%)</span></p>
          </div>
        </li>
        <li>
          <div className='type'>
            <div className='emoji'>
              <Emoji emoji='emoji-4' height={24} width={24} />
            </div>
          </div>
          <div className='score'>
            <div className='percentage' style={{ width: `${offsettedPercentage(3)}%` }} />
            <p><b>{getCount(3)}</b> <span>({getPercentage(3)}%)</span></p>
          </div>
        </li>
        <li>
          <div className='type'>
            <div className='emoji'>
              <Emoji emoji='emoji-3' height={24} width={24} />
            </div>
          </div>
          <div className='score'>
            <div className='percentage' style={{ width: `${offsettedPercentage(2)}%` }} />
            <p><b>{getCount(2)}</b> <span>({getPercentage(2)}%)</span></p>
          </div>
        </li>
        <li>
          <div className='type'>
            <div className='emoji'>
              <Emoji emoji='emoji-2' height={24} width={24} />
            </div>
          </div>
          <div className='score'>
            <div className='percentage' style={{ width: `${offsettedPercentage(1)}%` }} />
            <p><b>{getCount(1)}</b> <span>({getPercentage(1)}%)</span></p>
          </div>
        </li>
        <li>
          <div className='type'>
            <div className='emoji'>
              <Emoji emoji='emoji-1' height={24} width={24} />
            </div>
          </div>
          <div className='score'>
            <div className='percentage' style={{ width: `${offsettedPercentage(0)}%` }} />
            <p><b>{getCount(0)}</b> <span>({getPercentage(0)}%)</span></p>
          </div>
        </li>
      </ul>
    </div>
  );
};
