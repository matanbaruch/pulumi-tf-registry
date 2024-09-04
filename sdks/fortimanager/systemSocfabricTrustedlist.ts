// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSocfabricTrustedlist extends pulumi.CustomResource {
    /**
     * Get an existing SystemSocfabricTrustedlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSocfabricTrustedlistState, opts?: pulumi.CustomResourceOptions): SystemSocfabricTrustedlist {
        return new SystemSocfabricTrustedlist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemSocfabricTrustedlist:SystemSocfabricTrustedlist';

    /**
     * Returns true if the given object is an instance of SystemSocfabricTrustedlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSocfabricTrustedlist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSocfabricTrustedlist.__pulumiType;
    }

    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly serial!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemSocfabricTrustedlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSocfabricTrustedlistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSocfabricTrustedlistArgs | SystemSocfabricTrustedlistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSocfabricTrustedlistState | undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["serial"] = state ? state.serial : undefined;
        } else {
            const args = argsOrState as SystemSocfabricTrustedlistArgs | undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["serial"] = args ? args.serial : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSocfabricTrustedlist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSocfabricTrustedlist resources.
 */
export interface SystemSocfabricTrustedlistState {
    fosid?: pulumi.Input<number>;
    serial?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSocfabricTrustedlist resource.
 */
export interface SystemSocfabricTrustedlistArgs {
    fosid?: pulumi.Input<number>;
    serial?: pulumi.Input<string>;
}
