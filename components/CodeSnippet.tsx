export default function CodeSnippet({ children }) {
  return (
    <div>
      <span className="code code-purple">()</span>
      <span className="code code-green">{" => "}</span>
      <span className="code">{"{"}</span>
      {children}
      <span className="code">{"}"}</span>
    </div>
  );
}
