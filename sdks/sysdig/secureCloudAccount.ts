// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecureCloudAccount extends pulumi.CustomResource {
    /**
     * Get an existing SecureCloudAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecureCloudAccountState, opts?: pulumi.CustomResourceOptions): SecureCloudAccount {
        return new SecureCloudAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/secureCloudAccount:SecureCloudAccount';

    /**
     * Returns true if the given object is an instance of SecureCloudAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecureCloudAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecureCloudAccount.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string>;
    public readonly alias!: pulumi.Output<string | undefined>;
    public readonly cloudProvider!: pulumi.Output<string>;
    public /*out*/ readonly externalId!: pulumi.Output<string>;
    public readonly roleEnabled!: pulumi.Output<boolean | undefined>;
    public readonly roleName!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SecureCloudAccountTimeouts | undefined>;
    public readonly workloadIdentityAccountAlias!: pulumi.Output<string | undefined>;
    public readonly workloadIdentityAccountId!: pulumi.Output<string | undefined>;

    /**
     * Create a SecureCloudAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecureCloudAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecureCloudAccountArgs | SecureCloudAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecureCloudAccountState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["externalId"] = state ? state.externalId : undefined;
            resourceInputs["roleEnabled"] = state ? state.roleEnabled : undefined;
            resourceInputs["roleName"] = state ? state.roleName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["workloadIdentityAccountAlias"] = state ? state.workloadIdentityAccountAlias : undefined;
            resourceInputs["workloadIdentityAccountId"] = state ? state.workloadIdentityAccountId : undefined;
        } else {
            const args = argsOrState as SecureCloudAccountArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.cloudProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudProvider'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["roleEnabled"] = args ? args.roleEnabled : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["workloadIdentityAccountAlias"] = args ? args.workloadIdentityAccountAlias : undefined;
            resourceInputs["workloadIdentityAccountId"] = args ? args.workloadIdentityAccountId : undefined;
            resourceInputs["externalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecureCloudAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecureCloudAccount resources.
 */
export interface SecureCloudAccountState {
    accountId?: pulumi.Input<string>;
    alias?: pulumi.Input<string>;
    cloudProvider?: pulumi.Input<string>;
    externalId?: pulumi.Input<string>;
    roleEnabled?: pulumi.Input<boolean>;
    roleName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecureCloudAccountTimeouts>;
    workloadIdentityAccountAlias?: pulumi.Input<string>;
    workloadIdentityAccountId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecureCloudAccount resource.
 */
export interface SecureCloudAccountArgs {
    accountId: pulumi.Input<string>;
    alias?: pulumi.Input<string>;
    cloudProvider: pulumi.Input<string>;
    roleEnabled?: pulumi.Input<boolean>;
    roleName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SecureCloudAccountTimeouts>;
    workloadIdentityAccountAlias?: pulumi.Input<string>;
    workloadIdentityAccountId?: pulumi.Input<string>;
}
