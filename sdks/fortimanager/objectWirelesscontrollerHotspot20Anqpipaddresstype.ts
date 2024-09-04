// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerHotspot20Anqpipaddresstype extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerHotspot20Anqpipaddresstype resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerHotspot20AnqpipaddresstypeState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerHotspot20Anqpipaddresstype {
        return new ObjectWirelesscontrollerHotspot20Anqpipaddresstype(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerHotspot20Anqpipaddresstype:ObjectWirelesscontrollerHotspot20Anqpipaddresstype';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerHotspot20Anqpipaddresstype.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerHotspot20Anqpipaddresstype {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerHotspot20Anqpipaddresstype.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly ipv4AddressType!: pulumi.Output<string>;
    public readonly ipv6AddressType!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWirelesscontrollerHotspot20Anqpipaddresstype resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectWirelesscontrollerHotspot20AnqpipaddresstypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerHotspot20AnqpipaddresstypeArgs | ObjectWirelesscontrollerHotspot20AnqpipaddresstypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerHotspot20AnqpipaddresstypeState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["ipv4AddressType"] = state ? state.ipv4AddressType : undefined;
            resourceInputs["ipv6AddressType"] = state ? state.ipv6AddressType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerHotspot20AnqpipaddresstypeArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["ipv4AddressType"] = args ? args.ipv4AddressType : undefined;
            resourceInputs["ipv6AddressType"] = args ? args.ipv6AddressType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWirelesscontrollerHotspot20Anqpipaddresstype.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerHotspot20Anqpipaddresstype resources.
 */
export interface ObjectWirelesscontrollerHotspot20AnqpipaddresstypeState {
    adom?: pulumi.Input<string>;
    ipv4AddressType?: pulumi.Input<string>;
    ipv6AddressType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerHotspot20Anqpipaddresstype resource.
 */
export interface ObjectWirelesscontrollerHotspot20AnqpipaddresstypeArgs {
    adom?: pulumi.Input<string>;
    ipv4AddressType?: pulumi.Input<string>;
    ipv6AddressType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
