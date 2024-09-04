// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Botdetectionpolicy extends pulumi.CustomResource {
    /**
     * Get an existing Botdetectionpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BotdetectionpolicyState, opts?: pulumi.CustomResourceOptions): Botdetectionpolicy {
        return new Botdetectionpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/botdetectionpolicy:Botdetectionpolicy';

    /**
     * Returns true if the given object is an instance of Botdetectionpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Botdetectionpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Botdetectionpolicy.__pulumiType;
    }

    public readonly allowLists!: pulumi.Output<outputs.BotdetectionpolicyAllowList[] | undefined>;
    public readonly clientBehaviorDetectors!: pulumi.Output<outputs.BotdetectionpolicyClientBehaviorDetector[] | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly ipLocationDetectors!: pulumi.Output<outputs.BotdetectionpolicyIpLocationDetector[]>;
    public readonly ipReputationDetectors!: pulumi.Output<outputs.BotdetectionpolicyIpReputationDetector[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly systemBotMappingRef!: pulumi.Output<string>;
    public readonly systemConsolidatorRef!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly userAgentDetectors!: pulumi.Output<outputs.BotdetectionpolicyUserAgentDetector[]>;
    public readonly userBotMappingRef!: pulumi.Output<string>;
    public readonly userConsolidatorRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Botdetectionpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BotdetectionpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BotdetectionpolicyArgs | BotdetectionpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BotdetectionpolicyState | undefined;
            resourceInputs["allowLists"] = state ? state.allowLists : undefined;
            resourceInputs["clientBehaviorDetectors"] = state ? state.clientBehaviorDetectors : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipLocationDetectors"] = state ? state.ipLocationDetectors : undefined;
            resourceInputs["ipReputationDetectors"] = state ? state.ipReputationDetectors : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["systemBotMappingRef"] = state ? state.systemBotMappingRef : undefined;
            resourceInputs["systemConsolidatorRef"] = state ? state.systemConsolidatorRef : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["userAgentDetectors"] = state ? state.userAgentDetectors : undefined;
            resourceInputs["userBotMappingRef"] = state ? state.userBotMappingRef : undefined;
            resourceInputs["userConsolidatorRef"] = state ? state.userConsolidatorRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as BotdetectionpolicyArgs | undefined;
            if ((!args || args.ipLocationDetectors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipLocationDetectors'");
            }
            if ((!args || args.ipReputationDetectors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipReputationDetectors'");
            }
            if ((!args || args.userAgentDetectors === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userAgentDetectors'");
            }
            resourceInputs["allowLists"] = args ? args.allowLists : undefined;
            resourceInputs["clientBehaviorDetectors"] = args ? args.clientBehaviorDetectors : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipLocationDetectors"] = args ? args.ipLocationDetectors : undefined;
            resourceInputs["ipReputationDetectors"] = args ? args.ipReputationDetectors : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["systemBotMappingRef"] = args ? args.systemBotMappingRef : undefined;
            resourceInputs["systemConsolidatorRef"] = args ? args.systemConsolidatorRef : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["userAgentDetectors"] = args ? args.userAgentDetectors : undefined;
            resourceInputs["userBotMappingRef"] = args ? args.userBotMappingRef : undefined;
            resourceInputs["userConsolidatorRef"] = args ? args.userConsolidatorRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Botdetectionpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Botdetectionpolicy resources.
 */
export interface BotdetectionpolicyState {
    allowLists?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyAllowList>[]>;
    clientBehaviorDetectors?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyClientBehaviorDetector>[]>;
    description?: pulumi.Input<string>;
    ipLocationDetectors?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyIpLocationDetector>[]>;
    ipReputationDetectors?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyIpReputationDetector>[]>;
    name?: pulumi.Input<string>;
    systemBotMappingRef?: pulumi.Input<string>;
    systemConsolidatorRef?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    userAgentDetectors?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyUserAgentDetector>[]>;
    userBotMappingRef?: pulumi.Input<string>;
    userConsolidatorRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Botdetectionpolicy resource.
 */
export interface BotdetectionpolicyArgs {
    allowLists?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyAllowList>[]>;
    clientBehaviorDetectors?: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyClientBehaviorDetector>[]>;
    description?: pulumi.Input<string>;
    ipLocationDetectors: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyIpLocationDetector>[]>;
    ipReputationDetectors: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyIpReputationDetector>[]>;
    name?: pulumi.Input<string>;
    systemBotMappingRef?: pulumi.Input<string>;
    systemConsolidatorRef?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    userAgentDetectors: pulumi.Input<pulumi.Input<inputs.BotdetectionpolicyUserAgentDetector>[]>;
    userBotMappingRef?: pulumi.Input<string>;
    userConsolidatorRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
