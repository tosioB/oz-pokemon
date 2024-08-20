import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    /** 최적화
     * build코드를 넣어주는것 만으로도
     * node_modules폴더 안에 설치되어 있는 패키지들 중에서
     * 상황에 맞게 이용해야 하는 패키지들만 가져와서 사용할 수 있게 만드는 코드
     * 이 코드만 넣어도 기본적인 코드 스플리팅은 진행된다.
     */
    outDir: "docs",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if(id.indexOf("node_modules") !== -1) {
            const modules = id.split("node_modules/").pop().split("/")[0];
            return `vender-${module}`;
          }
        }
      }
    }
  }
})
