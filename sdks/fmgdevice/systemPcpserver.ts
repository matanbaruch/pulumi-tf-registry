// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemPcpserver extends pulumi.CustomResource {
    /**
     * Get an existing SystemPcpserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemPcpserverState, opts?: pulumi.CustomResourceOptions): SystemPcpserver {
        return new SystemPcpserver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemPcpserver:SystemPcpserver';

    /**
     * Returns true if the given object is an instance of SystemPcpserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemPcpserver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemPcpserver.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly pools!: pulumi.Output<outputs.SystemPcpserverPool[] | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemPcpserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemPcpserverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemPcpserverArgs | SystemPcpserverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemPcpserverState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["pools"] = state ? state.pools : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemPcpserverArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["pools"] = args ? args.pools : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemPcpserver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemPcpserver resources.
 */
export interface SystemPcpserverState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    pools?: pulumi.Input<pulumi.Input<inputs.SystemPcpserverPool>[]>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemPcpserver resource.
 */
export interface SystemPcpserverArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    pools?: pulumi.Input<pulumi.Input<inputs.SystemPcpserverPool>[]>;
    status?: pulumi.Input<string>;
}
