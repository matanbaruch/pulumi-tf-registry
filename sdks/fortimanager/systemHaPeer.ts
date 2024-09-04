// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemHaPeer extends pulumi.CustomResource {
    /**
     * Get an existing SystemHaPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemHaPeerState, opts?: pulumi.CustomResourceOptions): SystemHaPeer {
        return new SystemHaPeer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemHaPeer:SystemHaPeer';

    /**
     * Returns true if the given object is an instance of SystemHaPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemHaPeer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemHaPeer.__pulumiType;
    }

    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly ip!: pulumi.Output<string>;
    public readonly ip6!: pulumi.Output<string>;
    public readonly serialNumber!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemHaPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemHaPeerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemHaPeerArgs | SystemHaPeerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemHaPeerState | undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ip6"] = state ? state.ip6 : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemHaPeerArgs | undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ip6"] = args ? args.ip6 : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemHaPeer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemHaPeer resources.
 */
export interface SystemHaPeerState {
    fosid?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    ip6?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemHaPeer resource.
 */
export interface SystemHaPeerArgs {
    fosid?: pulumi.Input<number>;
    ip?: pulumi.Input<string>;
    ip6?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
