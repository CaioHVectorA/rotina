export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-center py-0 px-4">
        <img 
          src="/logo.jpg" 
          alt="TikTok Shop Logo" 
          className="h-20 w-auto object-contain"
        />
      </div>
    </header>
  );
}
