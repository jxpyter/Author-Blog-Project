import { Typography, Box, Chip } from "@mui/material";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export default function BlogCard({
  image,
  title,
  content,
  date,
  category,
  author,
}: BlogCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/[0.15] transition-colors">
      <div className="relative h-40">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Chip
            label={category}
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
              color: "white",
              "& .MuiChip-label": { fontWeight: 500 },
            }}
          />
        </div>
      </div>

      <Box className="p-4">
        <Typography variant="h6" className="font-bold mb-2 text-white">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-300 mb-4 line-clamp-2">
          {content}
        </Typography>
        <Typography
          variant="body2"
          className="pt-2 text-gray-800 mb-4 line-clamp-2"
        >
          {author}
        </Typography>

        <div className="flex items-center justify-between">
          <Box className="flex items-center gap-2 text-gray-400">
            <Calendar size={16} />
            <Typography variant="caption">{date}</Typography>
          </Box>
          <button className="text-white opacity-50 hover:opacity-100 transition-opacity">
            <ArrowRight size={20} />
          </button>
        </div>
      </Box>
    </div>
  );
}
