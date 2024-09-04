// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosTemplateIcmpV6Type extends pulumi.CustomResource {
    /**
     * Get an existing DdosTemplateIcmpV6Type resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosTemplateIcmpV6TypeState, opts?: pulumi.CustomResourceOptions): DdosTemplateIcmpV6Type {
        return new DdosTemplateIcmpV6Type(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosTemplateIcmpV6Type:DdosTemplateIcmpV6Type';

    /**
     * Returns true if the given object is an instance of DdosTemplateIcmpV6Type.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosTemplateIcmpV6Type {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosTemplateIcmpV6Type.__pulumiType;
    }

    public readonly codeOther!: pulumi.Output<outputs.DdosTemplateIcmpV6TypeCodeOther | undefined>;
    public readonly codes!: pulumi.Output<outputs.DdosTemplateIcmpV6TypeCode[] | undefined>;
    /**
     * IcmpTmplName
     */
    public readonly icmpTmplName!: pulumi.Output<string>;
    /**
     * Reject this ICMP type
     */
    public readonly typeDeny!: pulumi.Output<number | undefined>;
    /**
     * Specify ICMP type number
     */
    public readonly typeNumber!: pulumi.Output<number>;
    /**
     * Specify the whole rate with this type
     */
    public readonly typeRate!: pulumi.Output<number | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosTemplateIcmpV6Type resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosTemplateIcmpV6TypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosTemplateIcmpV6TypeArgs | DdosTemplateIcmpV6TypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosTemplateIcmpV6TypeState | undefined;
            resourceInputs["codeOther"] = state ? state.codeOther : undefined;
            resourceInputs["codes"] = state ? state.codes : undefined;
            resourceInputs["icmpTmplName"] = state ? state.icmpTmplName : undefined;
            resourceInputs["typeDeny"] = state ? state.typeDeny : undefined;
            resourceInputs["typeNumber"] = state ? state.typeNumber : undefined;
            resourceInputs["typeRate"] = state ? state.typeRate : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosTemplateIcmpV6TypeArgs | undefined;
            if ((!args || args.icmpTmplName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'icmpTmplName'");
            }
            if ((!args || args.typeNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeNumber'");
            }
            resourceInputs["codeOther"] = args ? args.codeOther : undefined;
            resourceInputs["codes"] = args ? args.codes : undefined;
            resourceInputs["icmpTmplName"] = args ? args.icmpTmplName : undefined;
            resourceInputs["typeDeny"] = args ? args.typeDeny : undefined;
            resourceInputs["typeNumber"] = args ? args.typeNumber : undefined;
            resourceInputs["typeRate"] = args ? args.typeRate : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosTemplateIcmpV6Type.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosTemplateIcmpV6Type resources.
 */
export interface DdosTemplateIcmpV6TypeState {
    codeOther?: pulumi.Input<inputs.DdosTemplateIcmpV6TypeCodeOther>;
    codes?: pulumi.Input<pulumi.Input<inputs.DdosTemplateIcmpV6TypeCode>[]>;
    /**
     * IcmpTmplName
     */
    icmpTmplName?: pulumi.Input<string>;
    /**
     * Reject this ICMP type
     */
    typeDeny?: pulumi.Input<number>;
    /**
     * Specify ICMP type number
     */
    typeNumber?: pulumi.Input<number>;
    /**
     * Specify the whole rate with this type
     */
    typeRate?: pulumi.Input<number>;
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
 * The set of arguments for constructing a DdosTemplateIcmpV6Type resource.
 */
export interface DdosTemplateIcmpV6TypeArgs {
    codeOther?: pulumi.Input<inputs.DdosTemplateIcmpV6TypeCodeOther>;
    codes?: pulumi.Input<pulumi.Input<inputs.DdosTemplateIcmpV6TypeCode>[]>;
    /**
     * IcmpTmplName
     */
    icmpTmplName: pulumi.Input<string>;
    /**
     * Reject this ICMP type
     */
    typeDeny?: pulumi.Input<number>;
    /**
     * Specify ICMP type number
     */
    typeNumber: pulumi.Input<number>;
    /**
     * Specify the whole rate with this type
     */
    typeRate?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
