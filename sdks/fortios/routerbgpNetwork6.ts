// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterbgpNetwork6 extends pulumi.CustomResource {
    /**
     * Get an existing RouterbgpNetwork6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterbgpNetwork6State, opts?: pulumi.CustomResourceOptions): RouterbgpNetwork6 {
        return new RouterbgpNetwork6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/routerbgpNetwork6:RouterbgpNetwork6';

    /**
     * Returns true if the given object is an instance of RouterbgpNetwork6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterbgpNetwork6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterbgpNetwork6.__pulumiType;
    }

    public readonly backdoor!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly networkImportCheck!: pulumi.Output<string>;
    public readonly prefix6!: pulumi.Output<string>;
    public readonly routeMap!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a RouterbgpNetwork6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterbgpNetwork6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterbgpNetwork6Args | RouterbgpNetwork6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterbgpNetwork6State | undefined;
            resourceInputs["backdoor"] = state ? state.backdoor : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["networkImportCheck"] = state ? state.networkImportCheck : undefined;
            resourceInputs["prefix6"] = state ? state.prefix6 : undefined;
            resourceInputs["routeMap"] = state ? state.routeMap : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as RouterbgpNetwork6Args | undefined;
            resourceInputs["backdoor"] = args ? args.backdoor : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["networkImportCheck"] = args ? args.networkImportCheck : undefined;
            resourceInputs["prefix6"] = args ? args.prefix6 : undefined;
            resourceInputs["routeMap"] = args ? args.routeMap : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterbgpNetwork6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterbgpNetwork6 resources.
 */
export interface RouterbgpNetwork6State {
    backdoor?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    networkImportCheck?: pulumi.Input<string>;
    prefix6?: pulumi.Input<string>;
    routeMap?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterbgpNetwork6 resource.
 */
export interface RouterbgpNetwork6Args {
    backdoor?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    networkImportCheck?: pulumi.Input<string>;
    prefix6?: pulumi.Input<string>;
    routeMap?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
