import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type SkeletonProps = {
  width: number;
  height: number;
};

const Skeleton = ({ width, height }: SkeletonProps) => (
  <SkeletonPlaceholder enabled>
    <SkeletonPlaceholder.Item
      flexDirection="row"
      width="100%"
      alignItems="center"
    >
      <SkeletonPlaceholder.Item width={width} height={height} />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

export { Skeleton };
