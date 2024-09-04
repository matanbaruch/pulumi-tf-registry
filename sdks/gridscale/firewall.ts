// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Firewall extends pulumi.CustomResource {
    /**
     * Get an existing Firewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallState, opts?: pulumi.CustomResourceOptions): Firewall {
        return new Firewall(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gridscale:index/firewall:Firewall';

    /**
     * Returns true if the given object is an instance of Firewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Firewall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Firewall.__pulumiType;
    }

    /**
     * The date and time of the last object change.
     */
    public /*out*/ readonly changeTime!: pulumi.Output<string>;
    /**
     * The date and time the object was initially created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the Firewall.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * List of labels.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    public /*out*/ readonly locationName!: pulumi.Output<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly networks!: pulumi.Output<outputs.FirewallNetwork[]>;
    /**
     * The object is private, the value will be true. Otherwise the value will be false.
     */
    public /*out*/ readonly private!: pulumi.Output<boolean>;
    public readonly rulesV4Ins!: pulumi.Output<outputs.FirewallRulesV4In[] | undefined>;
    public readonly rulesV4Outs!: pulumi.Output<outputs.FirewallRulesV4Out[] | undefined>;
    public readonly rulesV6Ins!: pulumi.Output<outputs.FirewallRulesV6In[] | undefined>;
    public readonly rulesV6Outs!: pulumi.Output<outputs.FirewallRulesV6Out[] | undefined>;
    /**
     * Status indicates the status of the object
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FirewallTimeouts | undefined>;

    /**
     * Create a Firewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallArgs | FirewallState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallState | undefined;
            resourceInputs["changeTime"] = state ? state.changeTime : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["locationName"] = state ? state.locationName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["private"] = state ? state.private : undefined;
            resourceInputs["rulesV4Ins"] = state ? state.rulesV4Ins : undefined;
            resourceInputs["rulesV4Outs"] = state ? state.rulesV4Outs : undefined;
            resourceInputs["rulesV6Ins"] = state ? state.rulesV6Ins : undefined;
            resourceInputs["rulesV6Outs"] = state ? state.rulesV6Outs : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirewallArgs | undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rulesV4Ins"] = args ? args.rulesV4Ins : undefined;
            resourceInputs["rulesV4Outs"] = args ? args.rulesV4Outs : undefined;
            resourceInputs["rulesV6Ins"] = args ? args.rulesV6Ins : undefined;
            resourceInputs["rulesV6Outs"] = args ? args.rulesV6Outs : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["changeTime"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["locationName"] = undefined /*out*/;
            resourceInputs["networks"] = undefined /*out*/;
            resourceInputs["private"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Firewall.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Firewall resources.
 */
export interface FirewallState {
    /**
     * The date and time of the last object change.
     */
    changeTime?: pulumi.Input<string>;
    /**
     * The date and time the object was initially created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the Firewall.
     */
    description?: pulumi.Input<string>;
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    locationName?: pulumi.Input<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    name?: pulumi.Input<string>;
    networks?: pulumi.Input<pulumi.Input<inputs.FirewallNetwork>[]>;
    /**
     * The object is private, the value will be true. Otherwise the value will be false.
     */
    private?: pulumi.Input<boolean>;
    rulesV4Ins?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV4In>[]>;
    rulesV4Outs?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV4Out>[]>;
    rulesV6Ins?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV6In>[]>;
    rulesV6Outs?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV6Out>[]>;
    /**
     * Status indicates the status of the object
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirewallTimeouts>;
}

/**
 * The set of arguments for constructing a Firewall resource.
 */
export interface FirewallArgs {
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    name?: pulumi.Input<string>;
    rulesV4Ins?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV4In>[]>;
    rulesV4Outs?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV4Out>[]>;
    rulesV6Ins?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV6In>[]>;
    rulesV6Outs?: pulumi.Input<pulumi.Input<inputs.FirewallRulesV6Out>[]>;
    timeouts?: pulumi.Input<inputs.FirewallTimeouts>;
}
