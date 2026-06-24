import { getMapEmbedUrl, MAP_CONFIG } from "../../config/mapConfig";

export default function ContactMap() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        title="QKTS Location Map"
        src={getMapEmbedUrl()}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="sr-only">{MAP_CONFIG.address}</p>
    </div>
  );
}
