// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetappBackupVault extends pulumi.CustomResource {
    /**
     * Get an existing NetappBackupVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetappBackupVaultState, opts?: pulumi.CustomResourceOptions): NetappBackupVault {
        return new NetappBackupVault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/netappBackupVault:NetappBackupVault';

    /**
     * Returns true if the given object is an instance of NetappBackupVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetappBackupVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetappBackupVault.__pulumiType;
    }

    /**
     * Create time of the backup vault. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Location (region) of the backup vault.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the backup vault. Needs to be unique per location.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The state of the Backup Vault.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetappBackupVaultTimeouts | undefined>;

    /**
     * Create a NetappBackupVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetappBackupVaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetappBackupVaultArgs | NetappBackupVaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetappBackupVaultState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetappBackupVaultArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetappBackupVault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetappBackupVault resources.
 */
export interface NetappBackupVaultState {
    /**
     * Create time of the backup vault. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Location (region) of the backup vault.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the backup vault. Needs to be unique per location.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The state of the Backup Vault.
     */
    state?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetappBackupVaultTimeouts>;
}

/**
 * The set of arguments for constructing a NetappBackupVault resource.
 */
export interface NetappBackupVaultArgs {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Location (region) of the backup vault.
     */
    location: pulumi.Input<string>;
    /**
     * The resource name of the backup vault. Needs to be unique per location.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetappBackupVaultTimeouts>;
}
