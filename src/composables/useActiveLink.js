import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export function useActiveLink() {
  const route = useRoute();

  const highlightActiveLinks = () => {
    setTimeout(() => {
      const activeLinks = Array.from(document.querySelectorAll('.router-link-active'));

      if (!activeLinks.length) return;
      activeLinks.forEach(link => {
        const parent = link.closest('li');
        if (parent) parent.classList.add('active');
      });
    }, 100);
  };

  watch(() => route.fullPath, highlightActiveLinks);
  onMounted(highlightActiveLinks);
}
