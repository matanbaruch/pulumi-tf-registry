// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class L3outHsrpInterfaceGroup extends pulumi.CustomResource {
    /**
     * Get an existing L3outHsrpInterfaceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3outHsrpInterfaceGroupState, opts?: pulumi.CustomResourceOptions): L3outHsrpInterfaceGroup {
        return new L3outHsrpInterfaceGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3outHsrpInterfaceGroup:L3outHsrpInterfaceGroup';

    /**
     * Returns true if the given object is an instance of L3outHsrpInterfaceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3outHsrpInterfaceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3outHsrpInterfaceGroup.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly configIssues!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly groupAf!: pulumi.Output<string>;
    public readonly groupId!: pulumi.Output<string>;
    public readonly groupName!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly ipObtainMode!: pulumi.Output<string>;
    public readonly l3outHsrpInterfaceProfileDn!: pulumi.Output<string>;
    public readonly mac!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationHsrpRsGroupPol!: pulumi.Output<string | undefined>;

    /**
     * Create a L3outHsrpInterfaceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3outHsrpInterfaceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3outHsrpInterfaceGroupArgs | L3outHsrpInterfaceGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3outHsrpInterfaceGroupState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["configIssues"] = state ? state.configIssues : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupAf"] = state ? state.groupAf : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ipObtainMode"] = state ? state.ipObtainMode : undefined;
            resourceInputs["l3outHsrpInterfaceProfileDn"] = state ? state.l3outHsrpInterfaceProfileDn : undefined;
            resourceInputs["mac"] = state ? state.mac : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationHsrpRsGroupPol"] = state ? state.relationHsrpRsGroupPol : undefined;
        } else {
            const args = argsOrState as L3outHsrpInterfaceGroupArgs | undefined;
            if ((!args || args.l3outHsrpInterfaceProfileDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l3outHsrpInterfaceProfileDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["configIssues"] = args ? args.configIssues : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["groupAf"] = args ? args.groupAf : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ipObtainMode"] = args ? args.ipObtainMode : undefined;
            resourceInputs["l3outHsrpInterfaceProfileDn"] = args ? args.l3outHsrpInterfaceProfileDn : undefined;
            resourceInputs["mac"] = args ? args.mac : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationHsrpRsGroupPol"] = args ? args.relationHsrpRsGroupPol : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3outHsrpInterfaceGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3outHsrpInterfaceGroup resources.
 */
export interface L3outHsrpInterfaceGroupState {
    annotation?: pulumi.Input<string>;
    configIssues?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    groupAf?: pulumi.Input<string>;
    groupId?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipObtainMode?: pulumi.Input<string>;
    l3outHsrpInterfaceProfileDn?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationHsrpRsGroupPol?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a L3outHsrpInterfaceGroup resource.
 */
export interface L3outHsrpInterfaceGroupArgs {
    annotation?: pulumi.Input<string>;
    configIssues?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    groupAf?: pulumi.Input<string>;
    groupId?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipObtainMode?: pulumi.Input<string>;
    l3outHsrpInterfaceProfileDn: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationHsrpRsGroupPol?: pulumi.Input<string>;
}
