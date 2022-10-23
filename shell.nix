{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/30f6859a3ab126d943c23f92d2b158fe850f78f9.tar.gz") {} }:

with pkgs;

mkShell {
  buildInputs = [
    git
    nodejs-18_x
    nodePackages.pnpm
  ];

  NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
}
