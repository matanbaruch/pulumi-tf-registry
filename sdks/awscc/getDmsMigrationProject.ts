// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDmsMigrationProject(args: GetDmsMigrationProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetDmsMigrationProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDmsMigrationProject:getDmsMigrationProject", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmsMigrationProject.
 */
export interface GetDmsMigrationProjectArgs {
    id: string;
}

/**
 * A collection of values returned by getDmsMigrationProject.
 */
export interface GetDmsMigrationProjectResult {
    readonly description: string;
    readonly id: string;
    readonly instanceProfileArn: string;
    readonly instanceProfileIdentifier: string;
    readonly instanceProfileName: string;
    readonly migrationProjectArn: string;
    readonly migrationProjectCreationTime: string;
    readonly migrationProjectIdentifier: string;
    readonly migrationProjectName: string;
    readonly schemaConversionApplicationAttributes: outputs.GetDmsMigrationProjectSchemaConversionApplicationAttributes;
    readonly sourceDataProviderDescriptors: outputs.GetDmsMigrationProjectSourceDataProviderDescriptor[];
    readonly tags: outputs.GetDmsMigrationProjectTag[];
    readonly targetDataProviderDescriptors: outputs.GetDmsMigrationProjectTargetDataProviderDescriptor[];
    readonly transformationRules: string;
}
export function getDmsMigrationProjectOutput(args: GetDmsMigrationProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsMigrationProjectResult> {
    return pulumi.output(args).apply((a: any) => getDmsMigrationProject(a, opts))
}

/**
 * A collection of arguments for invoking getDmsMigrationProject.
 */
export interface GetDmsMigrationProjectOutputArgs {
    id: pulumi.Input<string>;
}
