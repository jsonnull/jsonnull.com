{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/2d6ab6c6b92f7aaf8bc53baba9754b9bfdce56f2.tar.gz") {} }:

with pkgs;

mkShell {
  buildInputs = [
    git
    nodejs-16_x
    nodePackages.yarn
  ];
}
