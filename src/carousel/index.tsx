/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, useImperativeHandle } from 'react';
import {
  StyledCarousel,
  StyledWindow,
  StyledTrack,
  StyledIndicator,
  StyledIndicators,
} from './carousel.style';

// 自动播放间隔
const INTERVAL = 3000;

export interface CarouselProps {
  prefixCls?: string;
  className?: string;
  autoplay?: boolean;
  width: number;
  beforeChange: (currentIndex: number, nextIndex: number) => void;
  afterChange: (currentIndex: number) => void;
  children: React.ReactNode;
}

export interface CarouselRefProps {
  prev: () => void;
  next: () => void;
}

const Carousel = React.forwardRef<CarouselRefProps, CarouselProps>(
  (
    {
      prefixCls = 'sm-carousel',
      className = '',
      width,
      autoplay,
      children,
      beforeChange,
      afterChange,
    }: CarouselProps,
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * 跳转至走马灯的某一页
     * @param step - 跳转至currentIndex + step页，负数往前，正数往后切换
     * @param index - 跳转至特定页，此配置会覆盖step配置
     */
    const setNextIndex = (step = 1, index?: number) => {
      setCurrentIndex((current) => {
        const nextIndex = index ? index : current + step;
        if (
          current !== nextIndex &&
          nextIndex >= 0 &&
          nextIndex < React.Children.count(children)
        ) {
          beforeChange?.(current, nextIndex);
          return nextIndex;
        }
        return current;
      });
    };

    const handleIndicatorClick = (index: number) => () => {
      setNextIndex(undefined, index);
    };

    useEffect(() => {
      let intervalId: number;
      if (autoplay) {
        intervalId = window.setInterval(() => {
          setNextIndex(1);
        }, INTERVAL);
      }
      return () => {
        intervalId && window.clearInterval(intervalId);
      };
    }, []);

    useEffect(() => {
      afterChange?.(currentIndex);
    }, [currentIndex]);

    useImperativeHandle(ref, () => ({
      prev: () => setNextIndex(-1),
      next: () => setNextIndex(1),
    }));

    const translateX = currentIndex * width;
    const childrenCount = React.Children.count(children);
    console.log(childrenCount)
    const trackWidth = childrenCount * width;

    const cls = `${prefixCls} ${className}`;
    return (
      <StyledCarousel className={cls}>
        <StyledWindow width={width}>
          <StyledTrack
            translateX={translateX}
            width={trackWidth}
            className={`${prefixCls}-track`}
          >
            {children}
          </StyledTrack>
        </StyledWindow>
        <StyledIndicators className={`${prefixCls}-indicators`}>
          {Array(childrenCount)
            .fill(1)
            .map((_item, index) => (
              <StyledIndicator
                key={index}
                active={index === currentIndex}
                onClick={handleIndicatorClick(index)}
              />
            ))}
        </StyledIndicators>
      </StyledCarousel>
    );
  },
);

export default Carousel;
