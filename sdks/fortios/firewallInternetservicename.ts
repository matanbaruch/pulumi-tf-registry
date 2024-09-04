// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallInternetservicename extends pulumi.CustomResource {
    /**
     * Get an existing FirewallInternetservicename resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallInternetservicenameState, opts?: pulumi.CustomResourceOptions): FirewallInternetservicename {
        return new FirewallInternetservicename(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallInternetservicename:FirewallInternetservicename';

    /**
     * Returns true if the given object is an instance of FirewallInternetservicename.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallInternetservicename {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallInternetservicename.__pulumiType;
    }

    public readonly cityId!: pulumi.Output<number>;
    public readonly countryId!: pulumi.Output<number>;
    public readonly internetServiceId!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly regionId!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallInternetservicename resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallInternetservicenameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallInternetservicenameArgs | FirewallInternetservicenameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallInternetservicenameState | undefined;
            resourceInputs["cityId"] = state ? state.cityId : undefined;
            resourceInputs["countryId"] = state ? state.countryId : undefined;
            resourceInputs["internetServiceId"] = state ? state.internetServiceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallInternetservicenameArgs | undefined;
            resourceInputs["cityId"] = args ? args.cityId : undefined;
            resourceInputs["countryId"] = args ? args.countryId : undefined;
            resourceInputs["internetServiceId"] = args ? args.internetServiceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallInternetservicename.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallInternetservicename resources.
 */
export interface FirewallInternetservicenameState {
    cityId?: pulumi.Input<number>;
    countryId?: pulumi.Input<number>;
    internetServiceId?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallInternetservicename resource.
 */
export interface FirewallInternetservicenameArgs {
    cityId?: pulumi.Input<number>;
    countryId?: pulumi.Input<number>;
    internetServiceId?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
