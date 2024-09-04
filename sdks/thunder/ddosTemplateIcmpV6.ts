// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosTemplateIcmpV6 extends pulumi.CustomResource {
    /**
     * Get an existing DdosTemplateIcmpV6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosTemplateIcmpV6State, opts?: pulumi.CustomResourceOptions): DdosTemplateIcmpV6 {
        return new DdosTemplateIcmpV6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosTemplateIcmpV6:DdosTemplateIcmpV6';

    /**
     * Returns true if the given object is an instance of DdosTemplateIcmpV6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosTemplateIcmpV6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosTemplateIcmpV6.__pulumiType;
    }

    /**
     * DDOS ICMPv6 Template Name
     */
    public readonly icmpTmplName!: pulumi.Output<string>;
    public readonly typeLists!: pulumi.Output<outputs.DdosTemplateIcmpV6TypeList[] | undefined>;
    public readonly typeOther!: pulumi.Output<outputs.DdosTemplateIcmpV6TypeOther | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosTemplateIcmpV6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosTemplateIcmpV6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosTemplateIcmpV6Args | DdosTemplateIcmpV6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosTemplateIcmpV6State | undefined;
            resourceInputs["icmpTmplName"] = state ? state.icmpTmplName : undefined;
            resourceInputs["typeLists"] = state ? state.typeLists : undefined;
            resourceInputs["typeOther"] = state ? state.typeOther : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosTemplateIcmpV6Args | undefined;
            if ((!args || args.icmpTmplName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'icmpTmplName'");
            }
            resourceInputs["icmpTmplName"] = args ? args.icmpTmplName : undefined;
            resourceInputs["typeLists"] = args ? args.typeLists : undefined;
            resourceInputs["typeOther"] = args ? args.typeOther : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosTemplateIcmpV6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosTemplateIcmpV6 resources.
 */
export interface DdosTemplateIcmpV6State {
    /**
     * DDOS ICMPv6 Template Name
     */
    icmpTmplName?: pulumi.Input<string>;
    typeLists?: pulumi.Input<pulumi.Input<inputs.DdosTemplateIcmpV6TypeList>[]>;
    typeOther?: pulumi.Input<inputs.DdosTemplateIcmpV6TypeOther>;
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
 * The set of arguments for constructing a DdosTemplateIcmpV6 resource.
 */
export interface DdosTemplateIcmpV6Args {
    /**
     * DDOS ICMPv6 Template Name
     */
    icmpTmplName: pulumi.Input<string>;
    typeLists?: pulumi.Input<pulumi.Input<inputs.DdosTemplateIcmpV6TypeList>[]>;
    typeOther?: pulumi.Input<inputs.DdosTemplateIcmpV6TypeOther>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
