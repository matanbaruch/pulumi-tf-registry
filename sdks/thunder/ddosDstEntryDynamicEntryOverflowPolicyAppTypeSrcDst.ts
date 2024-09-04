// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstState, opts?: pulumi.CustomResourceOptions): DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst {
        return new DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst:DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst';

    /**
     * Returns true if the given object is an instance of DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst.__pulumiType;
    }

    /**
     * DstEntryName
     */
    public readonly dstEntryName!: pulumi.Output<string>;
    /**
     * DummyName
     */
    public readonly dummyName!: pulumi.Output<string>;
    /**
     * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
     */
    public readonly protocol!: pulumi.Output<string>;
    public readonly template!: pulumi.Output<outputs.DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstTemplate | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstArgs | DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstState | undefined;
            resourceInputs["dstEntryName"] = state ? state.dstEntryName : undefined;
            resourceInputs["dummyName"] = state ? state.dummyName : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstArgs | undefined;
            if ((!args || args.dstEntryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstEntryName'");
            }
            if ((!args || args.dummyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dummyName'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["dstEntryName"] = args ? args.dstEntryName : undefined;
            resourceInputs["dummyName"] = args ? args.dummyName : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst resources.
 */
export interface DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstState {
    /**
     * DstEntryName
     */
    dstEntryName?: pulumi.Input<string>;
    /**
     * DummyName
     */
    dummyName?: pulumi.Input<string>;
    /**
     * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
     */
    protocol?: pulumi.Input<string>;
    template?: pulumi.Input<inputs.DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstTemplate>;
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
 * The set of arguments for constructing a DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDst resource.
 */
export interface DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstArgs {
    /**
     * DstEntryName
     */
    dstEntryName: pulumi.Input<string>;
    /**
     * DummyName
     */
    dummyName: pulumi.Input<string>;
    /**
     * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
     */
    protocol: pulumi.Input<string>;
    template?: pulumi.Input<inputs.DdosDstEntryDynamicEntryOverflowPolicyAppTypeSrcDstTemplate>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
