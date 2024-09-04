// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectDynamicMulticastInterface extends pulumi.CustomResource {
    /**
     * Get an existing ObjectDynamicMulticastInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectDynamicMulticastInterfaceState, opts?: pulumi.CustomResourceOptions): ObjectDynamicMulticastInterface {
        return new ObjectDynamicMulticastInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectDynamicMulticastInterface:ObjectDynamicMulticastInterface';

    /**
     * Returns true if the given object is an instance of ObjectDynamicMulticastInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectDynamicMulticastInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectDynamicMulticastInterface.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly defaultMapping!: pulumi.Output<string | undefined>;
    public readonly defmapIntf!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly dynamicMappings!: pulumi.Output<outputs.ObjectDynamicMulticastInterfaceDynamicMapping[] | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly zoneOnly!: pulumi.Output<string>;

    /**
     * Create a ObjectDynamicMulticastInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectDynamicMulticastInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectDynamicMulticastInterfaceArgs | ObjectDynamicMulticastInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectDynamicMulticastInterfaceState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["defaultMapping"] = state ? state.defaultMapping : undefined;
            resourceInputs["defmapIntf"] = state ? state.defmapIntf : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dynamicMappings"] = state ? state.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["zoneOnly"] = state ? state.zoneOnly : undefined;
        } else {
            const args = argsOrState as ObjectDynamicMulticastInterfaceArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["defaultMapping"] = args ? args.defaultMapping : undefined;
            resourceInputs["defmapIntf"] = args ? args.defmapIntf : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dynamicMappings"] = args ? args.dynamicMappings : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["zoneOnly"] = args ? args.zoneOnly : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectDynamicMulticastInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectDynamicMulticastInterface resources.
 */
export interface ObjectDynamicMulticastInterfaceState {
    adom?: pulumi.Input<string>;
    defaultMapping?: pulumi.Input<string>;
    defmapIntf?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectDynamicMulticastInterfaceDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    zoneOnly?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectDynamicMulticastInterface resource.
 */
export interface ObjectDynamicMulticastInterfaceArgs {
    adom?: pulumi.Input<string>;
    defaultMapping?: pulumi.Input<string>;
    defmapIntf?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dynamicMappings?: pulumi.Input<pulumi.Input<inputs.ObjectDynamicMulticastInterfaceDynamicMapping>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    zoneOnly?: pulumi.Input<string>;
}
