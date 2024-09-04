// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitorCloudAccount extends pulumi.CustomResource {
    /**
     * Get an existing MonitorCloudAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorCloudAccountState, opts?: pulumi.CustomResourceOptions): MonitorCloudAccount {
        return new MonitorCloudAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/monitorCloudAccount:MonitorCloudAccount';

    /**
     * Returns true if the given object is an instance of MonitorCloudAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorCloudAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorCloudAccount.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string>;
    public readonly additionalOptions!: pulumi.Output<string | undefined>;
    public readonly cloudProvider!: pulumi.Output<string>;
    public readonly integrationType!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MonitorCloudAccountTimeouts | undefined>;

    /**
     * Create a MonitorCloudAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorCloudAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorCloudAccountArgs | MonitorCloudAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorCloudAccountState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["additionalOptions"] = state ? state.additionalOptions : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["integrationType"] = state ? state.integrationType : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MonitorCloudAccountArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.cloudProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudProvider'");
            }
            if ((!args || args.integrationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationType'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["additionalOptions"] = args ? args.additionalOptions : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["integrationType"] = args ? args.integrationType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorCloudAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorCloudAccount resources.
 */
export interface MonitorCloudAccountState {
    accountId?: pulumi.Input<string>;
    additionalOptions?: pulumi.Input<string>;
    cloudProvider?: pulumi.Input<string>;
    integrationType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitorCloudAccountTimeouts>;
}

/**
 * The set of arguments for constructing a MonitorCloudAccount resource.
 */
export interface MonitorCloudAccountArgs {
    accountId: pulumi.Input<string>;
    additionalOptions?: pulumi.Input<string>;
    cloudProvider: pulumi.Input<string>;
    integrationType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitorCloudAccountTimeouts>;
}
