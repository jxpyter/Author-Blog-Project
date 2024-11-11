import { Typography, Box, IconButton } from "@mui/material";
import { Github, Instagram, Code2, Mail } from "lucide-react";

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "MongoDB", color: "#47A248" },
  { name: "GraphQL", color: "#E535AB" },
];

export default function Profile() {
  return (
    <div className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl h-full">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
            className="w-full h-full rounded-full object-cover"
            alt="Profile"
          />
        </div>

        <Typography
          variant="h4"
          className="font-bold mb-2 pb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          jxpyter
        </Typography>
        <Typography variant="subtitle1" className="text-gray-400 mb-8 pb-8">
          Newbie Web Developer :)
        </Typography>

        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              style={{ border: `1px solid ${tech.color}20` }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              <Typography variant="body2" className="text-gray-300">
                {tech.name}
              </Typography>
            </div>
          ))}
        </div>

        <Box className="flex justify-center gap-4">
          {[
            {
              icon: Github,
              label: "github",
            },
            { icon: Instagram, label: "instagram" },
            { icon: Code2, label: "portfolio" },
            { icon: Mail, label: "email" },
          ].map(({ icon: Icon, label }) => (
            <IconButton
              key={label}
              className="hover:scale-110 transition-transform"
              sx={{
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </div>
    </div>
  );
}
