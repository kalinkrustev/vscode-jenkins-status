/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

// tslint:disable-next-line:max-line-length
import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, Sponsor, IssueKind } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewJenkinsStatusContentProvider implements ContentProvider {

    public provideHeader(logoUrl: string): Header {
        return <Header> {logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `<b>Jenkins Status</b> adds an area in the status bar, indicating the 
            <b>build status</b> for any <b>Jenkins</b> job. Specially useful if you want to 
            <i>connect</i> a project with its CI server`};
    }

    public provideChangeLog(): ChangeLogItem[] {
        const changeLog: ChangeLogItem[] = [];

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "4.3.0", releaseDate: "October 2021" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Add CONTRIBUTING documentation",
                id: 71,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Update dependencies",
                id: 73,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: lodash",
                id: 65,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });        
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: ssri",
                id: 64,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });        
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: y18n",
                id: 63,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });        
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: elliptic",
                id: 62,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });        

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "4.2.1", releaseDate: "September 2020" } });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "<b>Open in Jenkins (Console Output)</b> command with unnamed job",
                id: 56,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "4.2.0", releaseDate: "August 2020" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Use <b>vscode-ext-codicons</b> package",
                id: 52,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Shrink installation size/time",
                id: 51,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Security Alert: elliptic",
                id: 54,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Security Alert: acorn",
                id: 53,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "4.1.0", releaseDate: "June 2020" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "Localization support",
                id: 30,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Support Extension View Context Menu",
                id: 50,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Migrate from TSLint to ESLint",
                id: 47,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "4.0.0", releaseDate: "February 2020" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "Adds <b>Multiple Jobs</b> and <b>in-progress</b> status support",
                id: 17,
                kind: IssueKind.PR,
                kudos: "@eramitmittal"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "<b>Status Bar</b> tooltip",
                id: 17,
                kind: IssueKind.PR,
                kudos: "@eramitmittal"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Skip authentication when no `username` is provided",
                id: 35,
                kind: IssueKind.PR,
                kudos: "@leeopop"
            }
        });

        return changeLog;
    }

    public provideSponsors(): Sponsor[] {
        const sponsors: Sponsor[] = [];
        return sponsors
    }
   
}