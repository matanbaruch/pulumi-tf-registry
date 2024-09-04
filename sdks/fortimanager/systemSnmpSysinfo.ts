// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSnmpSysinfo extends pulumi.CustomResource {
    /**
     * Get an existing SystemSnmpSysinfo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSnmpSysinfoState, opts?: pulumi.CustomResourceOptions): SystemSnmpSysinfo {
        return new SystemSnmpSysinfo(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/systemSnmpSysinfo:SystemSnmpSysinfo';

    /**
     * Returns true if the given object is an instance of SystemSnmpSysinfo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSnmpSysinfo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSnmpSysinfo.__pulumiType;
    }

    public readonly contactInfo!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly engineId!: pulumi.Output<string | undefined>;
    public readonly location!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly trapCpuHighExcludeNiceThreshold!: pulumi.Output<number>;
    public readonly trapHighCpuThreshold!: pulumi.Output<number>;
    public readonly trapLowMemoryThreshold!: pulumi.Output<number>;

    /**
     * Create a SystemSnmpSysinfo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSnmpSysinfoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSnmpSysinfoArgs | SystemSnmpSysinfoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSnmpSysinfoState | undefined;
            resourceInputs["contactInfo"] = state ? state.contactInfo : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["engineId"] = state ? state.engineId : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["trapCpuHighExcludeNiceThreshold"] = state ? state.trapCpuHighExcludeNiceThreshold : undefined;
            resourceInputs["trapHighCpuThreshold"] = state ? state.trapHighCpuThreshold : undefined;
            resourceInputs["trapLowMemoryThreshold"] = state ? state.trapLowMemoryThreshold : undefined;
        } else {
            const args = argsOrState as SystemSnmpSysinfoArgs | undefined;
            resourceInputs["contactInfo"] = args ? args.contactInfo : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["engineId"] = args ? args.engineId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["trapCpuHighExcludeNiceThreshold"] = args ? args.trapCpuHighExcludeNiceThreshold : undefined;
            resourceInputs["trapHighCpuThreshold"] = args ? args.trapHighCpuThreshold : undefined;
            resourceInputs["trapLowMemoryThreshold"] = args ? args.trapLowMemoryThreshold : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSnmpSysinfo.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSnmpSysinfo resources.
 */
export interface SystemSnmpSysinfoState {
    contactInfo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    engineId?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    trapCpuHighExcludeNiceThreshold?: pulumi.Input<number>;
    trapHighCpuThreshold?: pulumi.Input<number>;
    trapLowMemoryThreshold?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SystemSnmpSysinfo resource.
 */
export interface SystemSnmpSysinfoArgs {
    contactInfo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    engineId?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    trapCpuHighExcludeNiceThreshold?: pulumi.Input<number>;
    trapHighCpuThreshold?: pulumi.Input<number>;
    trapLowMemoryThreshold?: pulumi.Input<number>;
}
