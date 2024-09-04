// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Vpntrafficpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Vpntrafficpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpntrafficpolicyState, opts?: pulumi.CustomResourceOptions): Vpntrafficpolicy {
        return new Vpntrafficpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpntrafficpolicy:Vpntrafficpolicy';

    /**
     * Returns true if the given object is an instance of Vpntrafficpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vpntrafficpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vpntrafficpolicy.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly rule!: pulumi.Output<string>;

    /**
     * Create a Vpntrafficpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpntrafficpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpntrafficpolicyArgs | VpntrafficpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpntrafficpolicyState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
        } else {
            const args = argsOrState as VpntrafficpolicyArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.rule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rule'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rule"] = args ? args.rule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vpntrafficpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vpntrafficpolicy resources.
 */
export interface VpntrafficpolicyState {
    action?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Vpntrafficpolicy resource.
 */
export interface VpntrafficpolicyArgs {
    action: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rule: pulumi.Input<string>;
}
