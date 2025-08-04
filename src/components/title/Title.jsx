import "./Title.css";

export function Title({ title, subtitle }) {
  return (
    <div className="title-section">
      <div className="title-content">
        <h2 className="title wow animate__animated animate__pulse">{title}</h2>
        {subtitle && (
          <p className="title-subtitle animate__animated animate__pulse">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
