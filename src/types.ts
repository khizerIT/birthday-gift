
export type PageId = 
  | 'intro' 
  | 'angry-duck' 
  | 'apology' 
  | 'gift-gate' 
  | 'hub' 
  | 'letter' 
  | 'memories' 
  | 'sunflower' 
  | 'playlist';

export interface ViewProps {
  onNavigate: (page: PageId) => void;
}
