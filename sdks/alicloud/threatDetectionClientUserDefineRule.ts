// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ThreatDetectionClientUserDefineRule extends pulumi.CustomResource {
    /**
     * Get an existing ThreatDetectionClientUserDefineRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ThreatDetectionClientUserDefineRuleState, opts?: pulumi.CustomResourceOptions): ThreatDetectionClientUserDefineRule {
        return new ThreatDetectionClientUserDefineRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/threatDetectionClientUserDefineRule:ThreatDetectionClientUserDefineRule';

    /**
     * Returns true if the given object is an instance of ThreatDetectionClientUserDefineRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThreatDetectionClientUserDefineRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThreatDetectionClientUserDefineRule.__pulumiType;
    }

    public readonly actionType!: pulumi.Output<number>;
    public readonly clientUserDefineRuleName!: pulumi.Output<string>;
    public readonly cmdline!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<number>;
    public readonly filePath!: pulumi.Output<string | undefined>;
    public readonly hash!: pulumi.Output<string | undefined>;
    public readonly ip!: pulumi.Output<string | undefined>;
    public readonly newFilePath!: pulumi.Output<string | undefined>;
    public readonly parentCmdline!: pulumi.Output<string | undefined>;
    public readonly parentProcPath!: pulumi.Output<string | undefined>;
    public readonly platform!: pulumi.Output<string>;
    public readonly portStr!: pulumi.Output<string>;
    public readonly procPath!: pulumi.Output<string | undefined>;
    public readonly registryContent!: pulumi.Output<string | undefined>;
    public readonly registryKey!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ThreatDetectionClientUserDefineRuleTimeouts | undefined>;
    public readonly type!: pulumi.Output<number>;

    /**
     * Create a ThreatDetectionClientUserDefineRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ThreatDetectionClientUserDefineRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ThreatDetectionClientUserDefineRuleArgs | ThreatDetectionClientUserDefineRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ThreatDetectionClientUserDefineRuleState | undefined;
            resourceInputs["actionType"] = state ? state.actionType : undefined;
            resourceInputs["clientUserDefineRuleName"] = state ? state.clientUserDefineRuleName : undefined;
            resourceInputs["cmdline"] = state ? state.cmdline : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["filePath"] = state ? state.filePath : undefined;
            resourceInputs["hash"] = state ? state.hash : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["newFilePath"] = state ? state.newFilePath : undefined;
            resourceInputs["parentCmdline"] = state ? state.parentCmdline : undefined;
            resourceInputs["parentProcPath"] = state ? state.parentProcPath : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["portStr"] = state ? state.portStr : undefined;
            resourceInputs["procPath"] = state ? state.procPath : undefined;
            resourceInputs["registryContent"] = state ? state.registryContent : undefined;
            resourceInputs["registryKey"] = state ? state.registryKey : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ThreatDetectionClientUserDefineRuleArgs | undefined;
            if ((!args || args.actionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actionType'");
            }
            if ((!args || args.clientUserDefineRuleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientUserDefineRuleName'");
            }
            if ((!args || args.platform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'platform'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["actionType"] = args ? args.actionType : undefined;
            resourceInputs["clientUserDefineRuleName"] = args ? args.clientUserDefineRuleName : undefined;
            resourceInputs["cmdline"] = args ? args.cmdline : undefined;
            resourceInputs["filePath"] = args ? args.filePath : undefined;
            resourceInputs["hash"] = args ? args.hash : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["newFilePath"] = args ? args.newFilePath : undefined;
            resourceInputs["parentCmdline"] = args ? args.parentCmdline : undefined;
            resourceInputs["parentProcPath"] = args ? args.parentProcPath : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["portStr"] = args ? args.portStr : undefined;
            resourceInputs["procPath"] = args ? args.procPath : undefined;
            resourceInputs["registryContent"] = args ? args.registryContent : undefined;
            resourceInputs["registryKey"] = args ? args.registryKey : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ThreatDetectionClientUserDefineRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ThreatDetectionClientUserDefineRule resources.
 */
export interface ThreatDetectionClientUserDefineRuleState {
    actionType?: pulumi.Input<number>;
    clientUserDefineRuleName?: pulumi.Input<string>;
    cmdline?: pulumi.Input<string>;
    createTime?: pulumi.Input<number>;
    filePath?: pulumi.Input<string>;
    hash?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    newFilePath?: pulumi.Input<string>;
    parentCmdline?: pulumi.Input<string>;
    parentProcPath?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    portStr?: pulumi.Input<string>;
    procPath?: pulumi.Input<string>;
    registryContent?: pulumi.Input<string>;
    registryKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionClientUserDefineRuleTimeouts>;
    type?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ThreatDetectionClientUserDefineRule resource.
 */
export interface ThreatDetectionClientUserDefineRuleArgs {
    actionType: pulumi.Input<number>;
    clientUserDefineRuleName: pulumi.Input<string>;
    cmdline?: pulumi.Input<string>;
    filePath?: pulumi.Input<string>;
    hash?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    newFilePath?: pulumi.Input<string>;
    parentCmdline?: pulumi.Input<string>;
    parentProcPath?: pulumi.Input<string>;
    platform: pulumi.Input<string>;
    portStr?: pulumi.Input<string>;
    procPath?: pulumi.Input<string>;
    registryContent?: pulumi.Input<string>;
    registryKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionClientUserDefineRuleTimeouts>;
    type: pulumi.Input<number>;
}
