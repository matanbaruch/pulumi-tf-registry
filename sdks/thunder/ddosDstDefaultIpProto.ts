// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstDefaultIpProto extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstDefaultIpProto resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstDefaultIpProtoState, opts?: pulumi.CustomResourceOptions): DdosDstDefaultIpProto {
        return new DdosDstDefaultIpProto(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstDefaultIpProto:DdosDstDefaultIpProto';

    /**
     * Returns true if the given object is an instance of DdosDstDefaultIpProto.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstDefaultIpProto {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstDefaultIpProto.__pulumiType;
    }

    /**
     * DefaultAddressType
     */
    public readonly defaultAddressType!: pulumi.Output<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    public readonly deny!: pulumi.Output<number | undefined>;
    /**
     * Global limit ID
     */
    public readonly glid!: pulumi.Output<string | undefined>;
    /**
     * Protocol Number
     */
    public readonly portNum!: pulumi.Output<number>;
    public readonly template!: pulumi.Output<outputs.DdosDstDefaultIpProtoTemplate | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstDefaultIpProto resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstDefaultIpProtoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstDefaultIpProtoArgs | DdosDstDefaultIpProtoState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstDefaultIpProtoState | undefined;
            resourceInputs["defaultAddressType"] = state ? state.defaultAddressType : undefined;
            resourceInputs["deny"] = state ? state.deny : undefined;
            resourceInputs["glid"] = state ? state.glid : undefined;
            resourceInputs["portNum"] = state ? state.portNum : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstDefaultIpProtoArgs | undefined;
            if ((!args || args.defaultAddressType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultAddressType'");
            }
            if ((!args || args.portNum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portNum'");
            }
            resourceInputs["defaultAddressType"] = args ? args.defaultAddressType : undefined;
            resourceInputs["deny"] = args ? args.deny : undefined;
            resourceInputs["glid"] = args ? args.glid : undefined;
            resourceInputs["portNum"] = args ? args.portNum : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstDefaultIpProto.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstDefaultIpProto resources.
 */
export interface DdosDstDefaultIpProtoState {
    /**
     * DefaultAddressType
     */
    defaultAddressType?: pulumi.Input<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * Protocol Number
     */
    portNum?: pulumi.Input<number>;
    template?: pulumi.Input<inputs.DdosDstDefaultIpProtoTemplate>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosDstDefaultIpProto resource.
 */
export interface DdosDstDefaultIpProtoArgs {
    /**
     * DefaultAddressType
     */
    defaultAddressType: pulumi.Input<string>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    /**
     * Protocol Number
     */
    portNum: pulumi.Input<number>;
    template?: pulumi.Input<inputs.DdosDstDefaultIpProtoTemplate>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
