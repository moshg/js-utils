/**
 * Example:
 *
 * ```html
 * <div style="width: 256px; height: 256px">
 *   <span data-font-size="50%"></span>
 * </div>
 * <script>applyFontFlex()</script>
 * ```
 */
const applyFontFlex = () => {
  document.querySelectorAll('[data-font-size]').forEach((el) => {
    const fs = el.dataset.fontSize;
    if (!fs || fs.length <= 1) {
      return;
    }
    const percent = Number(fs.slice(0, fs.length - 1));
    if (Number.isNaN(percent)) {
      return;
    }

    const parent = el.parentElement;
    if (!parent) {
      return;
    }

    const height = (parent.clientHeight * percent) / 100;
    el.style.fontSize = `${height}px`;
  });
};
