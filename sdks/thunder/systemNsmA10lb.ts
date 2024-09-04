// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemNsmA10lb extends pulumi.CustomResource {
    /**
     * Get an existing SystemNsmA10lb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNsmA10lbState, opts?: pulumi.CustomResourceOptions): SystemNsmA10lb {
        return new SystemNsmA10lb(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/systemNsmA10lb:SystemNsmA10lb';

    /**
     * Returns true if the given object is an instance of SystemNsmA10lb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemNsmA10lb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemNsmA10lb.__pulumiType;
    }

    /**
     * NSM will terminate a10lb if no response received
     */
    public readonly kill!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SystemNsmA10lb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemNsmA10lbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemNsmA10lbArgs | SystemNsmA10lbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemNsmA10lbState | undefined;
            resourceInputs["kill"] = state ? state.kill : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SystemNsmA10lbArgs | undefined;
            resourceInputs["kill"] = args ? args.kill : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemNsmA10lb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemNsmA10lb resources.
 */
export interface SystemNsmA10lbState {
    /**
     * NSM will terminate a10lb if no response received
     */
    kill?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemNsmA10lb resource.
 */
export interface SystemNsmA10lbArgs {
    /**
     * NSM will terminate a10lb if no response received
     */
    kill?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
