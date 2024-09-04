// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataProtectionBackupVault extends pulumi.CustomResource {
    /**
     * Get an existing DataProtectionBackupVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataProtectionBackupVaultState, opts?: pulumi.CustomResourceOptions): DataProtectionBackupVault {
        return new DataProtectionBackupVault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/dataProtectionBackupVault:DataProtectionBackupVault';

    /**
     * Returns true if the given object is an instance of DataProtectionBackupVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataProtectionBackupVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataProtectionBackupVault.__pulumiType;
    }

    public readonly datastoreType!: pulumi.Output<string>;
    public readonly identity!: pulumi.Output<outputs.DataProtectionBackupVaultIdentity | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly redundancy!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly retentionDurationInDays!: pulumi.Output<number | undefined>;
    public readonly softDelete!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DataProtectionBackupVaultTimeouts | undefined>;

    /**
     * Create a DataProtectionBackupVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataProtectionBackupVaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataProtectionBackupVaultArgs | DataProtectionBackupVaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataProtectionBackupVaultState | undefined;
            resourceInputs["datastoreType"] = state ? state.datastoreType : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["redundancy"] = state ? state.redundancy : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["retentionDurationInDays"] = state ? state.retentionDurationInDays : undefined;
            resourceInputs["softDelete"] = state ? state.softDelete : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataProtectionBackupVaultArgs | undefined;
            if ((!args || args.datastoreType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datastoreType'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.redundancy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'redundancy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["datastoreType"] = args ? args.datastoreType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["redundancy"] = args ? args.redundancy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDurationInDays"] = args ? args.retentionDurationInDays : undefined;
            resourceInputs["softDelete"] = args ? args.softDelete : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataProtectionBackupVault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataProtectionBackupVault resources.
 */
export interface DataProtectionBackupVaultState {
    datastoreType?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.DataProtectionBackupVaultIdentity>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    redundancy?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    retentionDurationInDays?: pulumi.Input<number>;
    softDelete?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataProtectionBackupVaultTimeouts>;
}

/**
 * The set of arguments for constructing a DataProtectionBackupVault resource.
 */
export interface DataProtectionBackupVaultArgs {
    datastoreType: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.DataProtectionBackupVaultIdentity>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    redundancy: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    retentionDurationInDays?: pulumi.Input<number>;
    softDelete?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataProtectionBackupVaultTimeouts>;
}
