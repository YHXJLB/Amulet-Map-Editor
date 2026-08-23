# Configuration file for the Sphinx documentation builder (English build).
#
# For a full list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------

project = "Amulet-Map-Editor"
copyright = "2020, The Amulet Map Editor Team"
author = "The Amulet Map Editor Team"

# The full version, including alpha/beta/rc tags
release = "v0.10.62"

# Documentation language (English)
language = "en"


# -- General configuration ---------------------------------------------------

extensions = []

templates_path = ["_templates"]

exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

master_doc = "index"


# -- Options for HTML output -------------------------------------------------

html_theme = "sphinx_rtd_theme"

html_static_path = ["_static"]
