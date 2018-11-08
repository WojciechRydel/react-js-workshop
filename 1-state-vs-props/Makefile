lesson1:
	@echo "Building $(pwd)"
	@pandoc ./index.md -t beamer -o ./index.pdf


build: lesson1

present: build
	@pdfpc -s ./index.pdf
