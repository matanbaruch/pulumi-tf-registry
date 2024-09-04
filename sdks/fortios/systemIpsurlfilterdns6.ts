// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemIpsurlfilterdns6 extends pulumi.CustomResource {
    /**
     * Get an existing SystemIpsurlfilterdns6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemIpsurlfilterdns6State, opts?: pulumi.CustomResourceOptions): SystemIpsurlfilterdns6 {
        return new SystemIpsurlfilterdns6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemIpsurlfilterdns6:SystemIpsurlfilterdns6';

    /**
     * Returns true if the given object is an instance of SystemIpsurlfilterdns6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemIpsurlfilterdns6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemIpsurlfilterdns6.__pulumiType;
    }

    public readonly address6!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SystemIpsurlfilterdns6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemIpsurlfilterdns6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemIpsurlfilterdns6Args | SystemIpsurlfilterdns6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemIpsurlfilterdns6State | undefined;
            resourceInputs["address6"] = state ? state.address6 : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SystemIpsurlfilterdns6Args | undefined;
            resourceInputs["address6"] = args ? args.address6 : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemIpsurlfilterdns6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemIpsurlfilterdns6 resources.
 */
export interface SystemIpsurlfilterdns6State {
    address6?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemIpsurlfilterdns6 resource.
 */
export interface SystemIpsurlfilterdns6Args {
    address6?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
