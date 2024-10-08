// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VmmController extends pulumi.CustomResource {
    /**
     * Get an existing VmmController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VmmControllerState, opts?: pulumi.CustomResourceOptions): VmmController {
        return new VmmController(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/vmmController:VmmController';

    /**
     * Returns true if the given object is an instance of VmmController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmmController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmmController.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly dvsVersion!: pulumi.Output<string>;
    public readonly hostOrIp!: pulumi.Output<string>;
    public readonly inventoryTrigSt!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly msftConfigErrMsg!: pulumi.Output<string>;
    public readonly msftConfigIssues!: pulumi.Output<string[]>;
    public readonly n1kvStatsMode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<string>;
    /**
     * Create relation to vmm:UsrAccP
     */
    public readonly relationVmmRsAcc!: pulumi.Output<string | undefined>;
    /**
     * Create relation to mon:InfraPol
     */
    public readonly relationVmmRsCtrlrPMonPol!: pulumi.Output<string | undefined>;
    /**
     * Create relation to fvns:McastAddrInstP
     */
    public readonly relationVmmRsMcastAddrNs!: pulumi.Output<string | undefined>;
    /**
     * Create relation to fv:EPg
     */
    public readonly relationVmmRsMgmtEPg!: pulumi.Output<string | undefined>;
    /**
     * Create relation to extdev:MgrP
     */
    public readonly relationVmmRsToExtDevMgrs!: pulumi.Output<string[] | undefined>;
    /**
     * Create relation to vmmCtrlrP
     */
    public readonly relationVmmRsVmmCtrlrPs!: pulumi.Output<outputs.VmmControllerRelationVmmRsVmmCtrlrP[] | undefined>;
    /**
     * Create relation to fvns:VxlanInstP
     */
    public readonly relationVmmRsVxlanNs!: pulumi.Output<string | undefined>;
    /**
     * Create relation to fvns:AInstP
     */
    public readonly relationVmmRsVxlanNsDef!: pulumi.Output<string>;
    public readonly rootContName!: pulumi.Output<string>;
    public readonly scope!: pulumi.Output<string>;
    public readonly seqNum!: pulumi.Output<string>;
    public readonly statsMode!: pulumi.Output<string>;
    public readonly vmmDomainDn!: pulumi.Output<string>;
    public readonly vxlanDeplPref!: pulumi.Output<string>;

    /**
     * Create a VmmController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmmControllerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VmmControllerArgs | VmmControllerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VmmControllerState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["dvsVersion"] = state ? state.dvsVersion : undefined;
            resourceInputs["hostOrIp"] = state ? state.hostOrIp : undefined;
            resourceInputs["inventoryTrigSt"] = state ? state.inventoryTrigSt : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["msftConfigErrMsg"] = state ? state.msftConfigErrMsg : undefined;
            resourceInputs["msftConfigIssues"] = state ? state.msftConfigIssues : undefined;
            resourceInputs["n1kvStatsMode"] = state ? state.n1kvStatsMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["relationVmmRsAcc"] = state ? state.relationVmmRsAcc : undefined;
            resourceInputs["relationVmmRsCtrlrPMonPol"] = state ? state.relationVmmRsCtrlrPMonPol : undefined;
            resourceInputs["relationVmmRsMcastAddrNs"] = state ? state.relationVmmRsMcastAddrNs : undefined;
            resourceInputs["relationVmmRsMgmtEPg"] = state ? state.relationVmmRsMgmtEPg : undefined;
            resourceInputs["relationVmmRsToExtDevMgrs"] = state ? state.relationVmmRsToExtDevMgrs : undefined;
            resourceInputs["relationVmmRsVmmCtrlrPs"] = state ? state.relationVmmRsVmmCtrlrPs : undefined;
            resourceInputs["relationVmmRsVxlanNs"] = state ? state.relationVmmRsVxlanNs : undefined;
            resourceInputs["relationVmmRsVxlanNsDef"] = state ? state.relationVmmRsVxlanNsDef : undefined;
            resourceInputs["rootContName"] = state ? state.rootContName : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["seqNum"] = state ? state.seqNum : undefined;
            resourceInputs["statsMode"] = state ? state.statsMode : undefined;
            resourceInputs["vmmDomainDn"] = state ? state.vmmDomainDn : undefined;
            resourceInputs["vxlanDeplPref"] = state ? state.vxlanDeplPref : undefined;
        } else {
            const args = argsOrState as VmmControllerArgs | undefined;
            if ((!args || args.hostOrIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostOrIp'");
            }
            if ((!args || args.rootContName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rootContName'");
            }
            if ((!args || args.vmmDomainDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmmDomainDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["dvsVersion"] = args ? args.dvsVersion : undefined;
            resourceInputs["hostOrIp"] = args ? args.hostOrIp : undefined;
            resourceInputs["inventoryTrigSt"] = args ? args.inventoryTrigSt : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["msftConfigErrMsg"] = args ? args.msftConfigErrMsg : undefined;
            resourceInputs["msftConfigIssues"] = args ? args.msftConfigIssues : undefined;
            resourceInputs["n1kvStatsMode"] = args ? args.n1kvStatsMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["relationVmmRsAcc"] = args ? args.relationVmmRsAcc : undefined;
            resourceInputs["relationVmmRsCtrlrPMonPol"] = args ? args.relationVmmRsCtrlrPMonPol : undefined;
            resourceInputs["relationVmmRsMcastAddrNs"] = args ? args.relationVmmRsMcastAddrNs : undefined;
            resourceInputs["relationVmmRsMgmtEPg"] = args ? args.relationVmmRsMgmtEPg : undefined;
            resourceInputs["relationVmmRsToExtDevMgrs"] = args ? args.relationVmmRsToExtDevMgrs : undefined;
            resourceInputs["relationVmmRsVmmCtrlrPs"] = args ? args.relationVmmRsVmmCtrlrPs : undefined;
            resourceInputs["relationVmmRsVxlanNs"] = args ? args.relationVmmRsVxlanNs : undefined;
            resourceInputs["relationVmmRsVxlanNsDef"] = args ? args.relationVmmRsVxlanNsDef : undefined;
            resourceInputs["rootContName"] = args ? args.rootContName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["seqNum"] = args ? args.seqNum : undefined;
            resourceInputs["statsMode"] = args ? args.statsMode : undefined;
            resourceInputs["vmmDomainDn"] = args ? args.vmmDomainDn : undefined;
            resourceInputs["vxlanDeplPref"] = args ? args.vxlanDeplPref : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VmmController.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VmmController resources.
 */
export interface VmmControllerState {
    annotation?: pulumi.Input<string>;
    dvsVersion?: pulumi.Input<string>;
    hostOrIp?: pulumi.Input<string>;
    inventoryTrigSt?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    msftConfigErrMsg?: pulumi.Input<string>;
    msftConfigIssues?: pulumi.Input<pulumi.Input<string>[]>;
    n1kvStatsMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    /**
     * Create relation to vmm:UsrAccP
     */
    relationVmmRsAcc?: pulumi.Input<string>;
    /**
     * Create relation to mon:InfraPol
     */
    relationVmmRsCtrlrPMonPol?: pulumi.Input<string>;
    /**
     * Create relation to fvns:McastAddrInstP
     */
    relationVmmRsMcastAddrNs?: pulumi.Input<string>;
    /**
     * Create relation to fv:EPg
     */
    relationVmmRsMgmtEPg?: pulumi.Input<string>;
    /**
     * Create relation to extdev:MgrP
     */
    relationVmmRsToExtDevMgrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Create relation to vmmCtrlrP
     */
    relationVmmRsVmmCtrlrPs?: pulumi.Input<pulumi.Input<inputs.VmmControllerRelationVmmRsVmmCtrlrP>[]>;
    /**
     * Create relation to fvns:VxlanInstP
     */
    relationVmmRsVxlanNs?: pulumi.Input<string>;
    /**
     * Create relation to fvns:AInstP
     */
    relationVmmRsVxlanNsDef?: pulumi.Input<string>;
    rootContName?: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    seqNum?: pulumi.Input<string>;
    statsMode?: pulumi.Input<string>;
    vmmDomainDn?: pulumi.Input<string>;
    vxlanDeplPref?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VmmController resource.
 */
export interface VmmControllerArgs {
    annotation?: pulumi.Input<string>;
    dvsVersion?: pulumi.Input<string>;
    hostOrIp: pulumi.Input<string>;
    inventoryTrigSt?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    msftConfigErrMsg?: pulumi.Input<string>;
    msftConfigIssues?: pulumi.Input<pulumi.Input<string>[]>;
    n1kvStatsMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    /**
     * Create relation to vmm:UsrAccP
     */
    relationVmmRsAcc?: pulumi.Input<string>;
    /**
     * Create relation to mon:InfraPol
     */
    relationVmmRsCtrlrPMonPol?: pulumi.Input<string>;
    /**
     * Create relation to fvns:McastAddrInstP
     */
    relationVmmRsMcastAddrNs?: pulumi.Input<string>;
    /**
     * Create relation to fv:EPg
     */
    relationVmmRsMgmtEPg?: pulumi.Input<string>;
    /**
     * Create relation to extdev:MgrP
     */
    relationVmmRsToExtDevMgrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Create relation to vmmCtrlrP
     */
    relationVmmRsVmmCtrlrPs?: pulumi.Input<pulumi.Input<inputs.VmmControllerRelationVmmRsVmmCtrlrP>[]>;
    /**
     * Create relation to fvns:VxlanInstP
     */
    relationVmmRsVxlanNs?: pulumi.Input<string>;
    /**
     * Create relation to fvns:AInstP
     */
    relationVmmRsVxlanNsDef?: pulumi.Input<string>;
    rootContName: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    seqNum?: pulumi.Input<string>;
    statsMode?: pulumi.Input<string>;
    vmmDomainDn: pulumi.Input<string>;
    vxlanDeplPref?: pulumi.Input<string>;
}
