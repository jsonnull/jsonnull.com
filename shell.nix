{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/5deb782b75fa41fa6a7ae0a7671b24e14f803897.tar.gz") {} }:

with pkgs;

mkShell {
  buildInputs = [
    git
    nodejs-18_x
    nodePackages.pnpm
  ];

  NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
}
