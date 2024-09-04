// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemInterfaceChildSecondaryIpList extends pulumi.CustomResource {
    /**
     * Get an existing SystemInterfaceChildSecondaryIpList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemInterfaceChildSecondaryIpListState, opts?: pulumi.CustomResourceOptions): SystemInterfaceChildSecondaryIpList {
        return new SystemInterfaceChildSecondaryIpList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemInterfaceChildSecondaryIpList:SystemInterfaceChildSecondaryIpList';

    /**
     * Returns true if the given object is an instance of SystemInterfaceChildSecondaryIpList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemInterfaceChildSecondaryIpList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemInterfaceChildSecondaryIpList.__pulumiType;
    }

    public readonly allowaccess!: pulumi.Output<string>;
    public readonly fadcId!: pulumi.Output<string>;
    public readonly floating!: pulumi.Output<string>;
    public readonly floatingIp!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly pkey!: pulumi.Output<string>;
    public readonly trafficGroup!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemInterfaceChildSecondaryIpList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemInterfaceChildSecondaryIpListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemInterfaceChildSecondaryIpListArgs | SystemInterfaceChildSecondaryIpListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemInterfaceChildSecondaryIpListState | undefined;
            resourceInputs["allowaccess"] = state ? state.allowaccess : undefined;
            resourceInputs["fadcId"] = state ? state.fadcId : undefined;
            resourceInputs["floating"] = state ? state.floating : undefined;
            resourceInputs["floatingIp"] = state ? state.floatingIp : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["pkey"] = state ? state.pkey : undefined;
            resourceInputs["trafficGroup"] = state ? state.trafficGroup : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as SystemInterfaceChildSecondaryIpListArgs | undefined;
            if ((!args || args.fadcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fadcId'");
            }
            if ((!args || args.pkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pkey'");
            }
            resourceInputs["allowaccess"] = args ? args.allowaccess : undefined;
            resourceInputs["fadcId"] = args ? args.fadcId : undefined;
            resourceInputs["floating"] = args ? args.floating : undefined;
            resourceInputs["floatingIp"] = args ? args.floatingIp : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["pkey"] = args ? args.pkey : undefined;
            resourceInputs["trafficGroup"] = args ? args.trafficGroup : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemInterfaceChildSecondaryIpList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemInterfaceChildSecondaryIpList resources.
 */
export interface SystemInterfaceChildSecondaryIpListState {
    allowaccess?: pulumi.Input<string>;
    fadcId?: pulumi.Input<string>;
    floating?: pulumi.Input<string>;
    floatingIp?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    pkey?: pulumi.Input<string>;
    trafficGroup?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemInterfaceChildSecondaryIpList resource.
 */
export interface SystemInterfaceChildSecondaryIpListArgs {
    allowaccess?: pulumi.Input<string>;
    fadcId: pulumi.Input<string>;
    floating?: pulumi.Input<string>;
    floatingIp?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    trafficGroup?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
