// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterMulticast6PimsmglobalRpaddress extends pulumi.CustomResource {
    /**
     * Get an existing RouterMulticast6PimsmglobalRpaddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterMulticast6PimsmglobalRpaddressState, opts?: pulumi.CustomResourceOptions): RouterMulticast6PimsmglobalRpaddress {
        return new RouterMulticast6PimsmglobalRpaddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerMulticast6PimsmglobalRpaddress:RouterMulticast6PimsmglobalRpaddress';

    /**
     * Returns true if the given object is an instance of RouterMulticast6PimsmglobalRpaddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterMulticast6PimsmglobalRpaddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterMulticast6PimsmglobalRpaddress.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly ip6Address!: pulumi.Output<string>;

    /**
     * Create a RouterMulticast6PimsmglobalRpaddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterMulticast6PimsmglobalRpaddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterMulticast6PimsmglobalRpaddressArgs | RouterMulticast6PimsmglobalRpaddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterMulticast6PimsmglobalRpaddressState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ip6Address"] = state ? state.ip6Address : undefined;
        } else {
            const args = argsOrState as RouterMulticast6PimsmglobalRpaddressArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ip6Address"] = args ? args.ip6Address : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterMulticast6PimsmglobalRpaddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterMulticast6PimsmglobalRpaddress resources.
 */
export interface RouterMulticast6PimsmglobalRpaddressState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    ip6Address?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterMulticast6PimsmglobalRpaddress resource.
 */
export interface RouterMulticast6PimsmglobalRpaddressArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    ip6Address?: pulumi.Input<string>;
}
