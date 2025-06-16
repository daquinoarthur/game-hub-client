import { Box, Tag } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  if (rating < 3) return null;

  const ratingMap: { [key: number]: { text: string; colorScheme: string } } = {
    3: { text: "meh", colorScheme: "red" },
    4: { text: "Recommended", colorScheme: "blue" },
    5: { text: "Exceptional", colorScheme: "green" },
  };

  return (
    <Box>
      <Tag colorScheme={ratingMap[rating].colorScheme} marginTop={6}>
        {ratingMap[rating].text}
      </Tag>
    </Box>
  );
};

export default Rating;
