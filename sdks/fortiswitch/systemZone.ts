// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemZone extends pulumi.CustomResource {
    /**
     * Get an existing SystemZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemZoneState, opts?: pulumi.CustomResourceOptions): SystemZone {
        return new SystemZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/systemZone:SystemZone';

    /**
     * Returns true if the given object is an instance of SystemZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemZone.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly interfaces!: pulumi.Output<outputs.SystemZoneInterface[] | undefined>;
    public readonly intrazone!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a SystemZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemZoneArgs | SystemZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemZoneState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["intrazone"] = state ? state.intrazone : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as SystemZoneArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["intrazone"] = args ? args.intrazone : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemZone resources.
 */
export interface SystemZoneState {
    dynamicSortSubtable?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.SystemZoneInterface>[]>;
    intrazone?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemZone resource.
 */
export interface SystemZoneArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.SystemZoneInterface>[]>;
    intrazone?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
