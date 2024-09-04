// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Inventory extends pulumi.CustomResource {
    /**
     * Get an existing Inventory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InventoryState, opts?: pulumi.CustomResourceOptions): Inventory {
        return new Inventory(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dcnm:index/inventory:Inventory';

    /**
     * Returns true if the given object is an instance of Inventory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Inventory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Inventory.__pulumiType;
    }

    public readonly authProtocol!: pulumi.Output<number | undefined>;
    public readonly configTimeout!: pulumi.Output<number | undefined>;
    public readonly deploy!: pulumi.Output<boolean | undefined>;
    public readonly fabricName!: pulumi.Output<string>;
    public readonly ips!: pulumi.Output<string[]>;
    public readonly maxHops!: pulumi.Output<number>;
    public readonly password!: pulumi.Output<string>;
    public readonly platform!: pulumi.Output<string>;
    public readonly preserveConfig!: pulumi.Output<string | undefined>;
    public readonly secondTimeout!: pulumi.Output<number>;
    public readonly switchConfigs!: pulumi.Output<outputs.InventorySwitchConfig[]>;
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a Inventory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InventoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InventoryArgs | InventoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InventoryState | undefined;
            resourceInputs["authProtocol"] = state ? state.authProtocol : undefined;
            resourceInputs["configTimeout"] = state ? state.configTimeout : undefined;
            resourceInputs["deploy"] = state ? state.deploy : undefined;
            resourceInputs["fabricName"] = state ? state.fabricName : undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["maxHops"] = state ? state.maxHops : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["preserveConfig"] = state ? state.preserveConfig : undefined;
            resourceInputs["secondTimeout"] = state ? state.secondTimeout : undefined;
            resourceInputs["switchConfigs"] = state ? state.switchConfigs : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as InventoryArgs | undefined;
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.switchConfigs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'switchConfigs'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["authProtocol"] = args ? args.authProtocol : undefined;
            resourceInputs["configTimeout"] = args ? args.configTimeout : undefined;
            resourceInputs["deploy"] = args ? args.deploy : undefined;
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["maxHops"] = args ? args.maxHops : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["platform"] = args ? args.platform : undefined;
            resourceInputs["preserveConfig"] = args ? args.preserveConfig : undefined;
            resourceInputs["secondTimeout"] = args ? args.secondTimeout : undefined;
            resourceInputs["switchConfigs"] = args ? args.switchConfigs : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Inventory.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Inventory resources.
 */
export interface InventoryState {
    authProtocol?: pulumi.Input<number>;
    configTimeout?: pulumi.Input<number>;
    deploy?: pulumi.Input<boolean>;
    fabricName?: pulumi.Input<string>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    maxHops?: pulumi.Input<number>;
    password?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    preserveConfig?: pulumi.Input<string>;
    secondTimeout?: pulumi.Input<number>;
    switchConfigs?: pulumi.Input<pulumi.Input<inputs.InventorySwitchConfig>[]>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Inventory resource.
 */
export interface InventoryArgs {
    authProtocol?: pulumi.Input<number>;
    configTimeout?: pulumi.Input<number>;
    deploy?: pulumi.Input<boolean>;
    fabricName: pulumi.Input<string>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    maxHops?: pulumi.Input<number>;
    password: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    preserveConfig?: pulumi.Input<string>;
    secondTimeout?: pulumi.Input<number>;
    switchConfigs: pulumi.Input<pulumi.Input<inputs.InventorySwitchConfig>[]>;
    username: pulumi.Input<string>;
}
