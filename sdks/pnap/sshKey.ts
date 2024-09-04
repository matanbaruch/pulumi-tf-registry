// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SshKey extends pulumi.CustomResource {
    /**
     * Get an existing SshKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshKeyState, opts?: pulumi.CustomResourceOptions): SshKey {
        return new SshKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pnap:index/sshKey:SshKey';

    /**
     * Returns true if the given object is an instance of SshKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SshKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SshKey.__pulumiType;
    }

    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    public readonly default!: pulumi.Output<boolean>;
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    public readonly key!: pulumi.Output<string>;
    public /*out*/ readonly lastUpdatedOn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SshKeyTimeouts | undefined>;

    /**
     * Create a SshKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SshKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SshKeyArgs | SshKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SshKeyState | undefined;
            resourceInputs["createdOn"] = state ? state.createdOn : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["lastUpdatedOn"] = state ? state.lastUpdatedOn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SshKeyArgs | undefined;
            if ((!args || args.default === undefined) && !opts.urn) {
                throw new Error("Missing required property 'default'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["lastUpdatedOn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SshKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SshKey resources.
 */
export interface SshKeyState {
    createdOn?: pulumi.Input<string>;
    default?: pulumi.Input<boolean>;
    fingerprint?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    lastUpdatedOn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SshKeyTimeouts>;
}

/**
 * The set of arguments for constructing a SshKey resource.
 */
export interface SshKeyArgs {
    default: pulumi.Input<boolean>;
    key: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SshKeyTimeouts>;
}
