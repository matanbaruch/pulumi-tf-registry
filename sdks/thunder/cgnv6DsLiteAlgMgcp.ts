// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6DsLiteAlgMgcp extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6DsLiteAlgMgcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6DsLiteAlgMgcpState, opts?: pulumi.CustomResourceOptions): Cgnv6DsLiteAlgMgcp {
        return new Cgnv6DsLiteAlgMgcp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6DsLiteAlgMgcp:Cgnv6DsLiteAlgMgcp';

    /**
     * Returns true if the given object is an instance of Cgnv6DsLiteAlgMgcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6DsLiteAlgMgcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6DsLiteAlgMgcp.__pulumiType;
    }

    /**
     * 'enable': Enable ALG;
     */
    public readonly mgcpEnable!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6DsLiteAlgMgcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6DsLiteAlgMgcpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6DsLiteAlgMgcpArgs | Cgnv6DsLiteAlgMgcpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6DsLiteAlgMgcpState | undefined;
            resourceInputs["mgcpEnable"] = state ? state.mgcpEnable : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6DsLiteAlgMgcpArgs | undefined;
            resourceInputs["mgcpEnable"] = args ? args.mgcpEnable : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6DsLiteAlgMgcp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6DsLiteAlgMgcp resources.
 */
export interface Cgnv6DsLiteAlgMgcpState {
    /**
     * 'enable': Enable ALG;
     */
    mgcpEnable?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6DsLiteAlgMgcp resource.
 */
export interface Cgnv6DsLiteAlgMgcpArgs {
    /**
     * 'enable': Enable ALG;
     */
    mgcpEnable?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
