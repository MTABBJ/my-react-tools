// vite.config.ts
import { defineConfig } from "file:///F:/project/myProject/my-react-tools/node_modules/vite/dist/node/index.js";
import react from "file:///F:/project/myProject/my-react-tools/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\project\\myProject\\my-react-tools";
function _resolve(dir) {
  return path.resolve(__vite_injected_original_dirname, dir);
}
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": _resolve("src"),
      "@page": _resolve("src/pages")
    }
  },
  envDir: _resolve("env"),
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxwcm9qZWN0XFxcXG15UHJvamVjdFxcXFxteS1yZWFjdC10b29sc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxccHJvamVjdFxcXFxteVByb2plY3RcXFxcbXktcmVhY3QtdG9vbHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3Byb2plY3QvbXlQcm9qZWN0L215LXJlYWN0LXRvb2xzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIF9yZXNvbHZlKGRpcjogc3RyaW5nKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBkaXIpO1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogX3Jlc29sdmUoJ3NyYycpLFxuICAgICAgJ0BwYWdlJzogX3Jlc29sdmUoJ3NyYy9wYWdlcycpXG4gICAgfVxuICB9LFxuICBlbnZEaXI6IF9yZXNvbHZlKCdlbnYnKSxcblxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUyxTQUFTLG9CQUFvQjtBQUNoVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLFNBQVMsU0FBUyxLQUFhO0FBQzdCLFNBQU8sS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFDcEM7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxTQUFTLEtBQUs7QUFBQSxNQUNuQixTQUFTLFNBQVMsV0FBVztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUSxTQUFTLEtBQUs7QUFBQSxFQUV0QixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjLENBQUMsT0FBTztBQUNwQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
