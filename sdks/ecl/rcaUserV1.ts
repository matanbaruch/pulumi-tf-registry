// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RcaUserV1 extends pulumi.CustomResource {
    /**
     * Get an existing RcaUserV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RcaUserV1State, opts?: pulumi.CustomResourceOptions): RcaUserV1 {
        return new RcaUserV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/rcaUserV1:RcaUserV1';

    /**
     * Returns true if the given object is an instance of RcaUserV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RcaUserV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RcaUserV1.__pulumiType;
    }

    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public /*out*/ readonly vpnEndpoints!: pulumi.Output<outputs.RcaUserV1VpnEndpoint[]>;

    /**
     * Create a RcaUserV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RcaUserV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RcaUserV1Args | RcaUserV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RcaUserV1State | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["vpnEndpoints"] = state ? state.vpnEndpoints : undefined;
        } else {
            const args = argsOrState as RcaUserV1Args | undefined;
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["vpnEndpoints"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RcaUserV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RcaUserV1 resources.
 */
export interface RcaUserV1State {
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    vpnEndpoints?: pulumi.Input<pulumi.Input<inputs.RcaUserV1VpnEndpoint>[]>;
}

/**
 * The set of arguments for constructing a RcaUserV1 resource.
 */
export interface RcaUserV1Args {
    password: pulumi.Input<string>;
}
